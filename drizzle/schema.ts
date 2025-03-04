import {
    pgTable,
    text,
    integer,
    timestamp,
    boolean,
    serial,
    date,
    real,
    index,
  } from "drizzle-orm/pg-core";
  import { relations } from "drizzle-orm";

  export const incomeTypeEnum = ["standard", "irregular"];
  export const expenseTypeEnum = ["normal", "recurring"];
  
  export const users = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
  });
  
  export const session = pgTable("session", {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  });
  
  export const account = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
  });
  
  export const verification = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
  });

  export const expenses = pgTable(
    "expenses",
    {
      id: serial("id").primaryKey(),
      userId: integer("user_id")
        .notNull()
        .references(() => users.id),
      categoryId: integer("category_id")
        .notNull()
        .references(() => expenseCategories.id),
      amount: real("amount").notNull(),
      date: date("date").notNull(),
      description: text("description"),
      type: text("type", { enum: expenseTypeEnum }).default("normal"),
      createdAt: date("created_at").defaultNow(),
      updatedAt: date("updated_at").defaultNow(),
    },
    (table) => {
      return {
        userIdIdx: index("expenses_user_id_idx").on(table.userId),
        categoryIdIdx: index("expenses_category_id_idx").on(table.categoryId),
        dateIdx: index("expenses_date_idx").on(table.date),
      };
    }
  );

  export const incomes = pgTable(
    "incomes",
    {
      id: serial("id").primaryKey(),
      userId: integer("user_id")
        .notNull()
        .references(() => users.id),
      categoryId: integer("category_id")
        .notNull()
        .references(() => incomeCategories.id),
      amount: real("amount").notNull(),
      date: date("date").notNull(),
      description: text("description"),
      type: text("type", { enum: incomeTypeEnum }).default("standard"),
      createdAt: date("created_at").defaultNow(),
      updatedAt: date("updated_at").defaultNow(),
    },
    (table) => {
      return {
        userIdIdx: index("incomes_user_id_idx").on(table.userId),
        categoryIdIdx: index("incomes_category_id_idx").on(table.categoryId),
        dateIdx: index("incomes_date_idx").on(table.date),
      };
    }
  );

  export const budgets = pgTable(
    "budgets",
    {
      id: serial("id").primaryKey(),
      userId: integer("user_id")
        .notNull()
        .references(() => users.id),
      categoryId: integer("category_id")
        .notNull()
        .references(() => expenseCategories.id),
      amount: real("amount").notNull(),
      startDate: date("start_date").notNull(),
      endDate: date("end_date").notNull(),
      description: text("description"),
      createdAt: date("created_at").defaultNow(),
      updatedAt: date("updated_at").defaultNow(),
    },
    (table) => {
      return {
        userIdIdx: index("busgets_user_id_idx").on(table.userId),
        categoryIdIdx: index("busgets_category_id_idx").on(table.categoryId),
        dateIdx: index("budgets_start_date_idx").on(table.startDate),
      };
    }
  );

  export const expenseCategories = pgTable("expense_categories", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(), // e.g., "Food", "Rent", "Transportation"
    description: text("description"),
    createdAt: date("created_at").defaultNow(),
    updatedAt: date("updated_at").defaultNow(),
  });

  export const incomeCategories = pgTable("income_categories", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(), 
    description: text("description"),
    createdAt: date("created_at").defaultNow(),
    updatedAt: date("updated_at").defaultNow(),
  });

  export const expensesRelations = relations(expenses, ({ one }) => ({
    user: one(users, {
      fields: [expenses.userId],
      references: [users.id],
    }),
    category: one(expenseCategories, {
      fields: [expenses.categoryId],
      references: [expenseCategories.id],
    }),
  }));

  export const incomesRelations = relations(incomes, ({ one }) => ({
    user: one(users, {
      fields: [incomes.userId],
      references: [users.id],
    }),
    category: one(incomeCategories, {
      fields: [incomes.categoryId],
      references: [incomeCategories.id],
    }),
  }));

  export const budgetsRelations = relations(budgets, ({ one }) => ({
    user: one(users, {
      fields: [budgets.userId],
      references: [users.id],
    }),
    category: one(expenseCategories, {
      fields: [budgets.categoryId],
      references: [expenseCategories.id],
    }),
  }));
  
  export const usersRelations = relations(users, ({ many }) => ({
    expenses: many(expenses),
    incomes: many(incomes),
    budgets: many(budgets),
  }));

  export const expenseCategoriesRelations = relations(
    expenseCategories,
    ({ many }) => ({
      expenses: many(expenses),
    })
  );

  export const incomeCategoriesRelations = relations(
    incomeCategories,
    ({ many }) => ({
      incomes: many(incomes),
    })
  );
