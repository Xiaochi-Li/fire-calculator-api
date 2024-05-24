-- script.sql
CREATE DATABASE fireCalculator;
USE fireCalculator;

CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  googleId VARCHAR(255),
  facebookId VARCHAR(255),
  customAccountId VARCHAR(255)
);

CREATE TABLE incomeType (
  id VARCHAR(255) PRIMARY KEY,
  type VARCHAR(255)
);

CREATE TABLE Income (
  incomeID VARCHAR(255) PRIMARY KEY,
  incomeType VARCHAR(255),
  incomeAmount FLOAT,
  FOREIGN KEY (incomeType) REFERENCES incomeType(id)
);

CREATE TABLE ServicingCost (
  survivingCostID VARCHAR(255) PRIMARY KEY,
  survivingCostAmount FLOAT
);

CREATE TABLE SplurgeCost (
  splurgeCostID VARCHAR(255) PRIMARY KEY,
  splurgeCostAmount FLOAT
);

CREATE TABLE FinancialProfile (
  id VARCHAR(255) PRIMARY KEY,
  userId VARCHAR(255) UNIQUE,
  mortgage FLOAT,
  incomeID VARCHAR(255) UNIQUE,
  survivingCostID VARCHAR(255) UNIQUE,
  splurgeCostID VARCHAR(255) UNIQUE,
  currentSuper FLOAT,
  currentInvestment FLOAT,
  expectedLifeSpend INT,
  expectedInvestmentGrowthRate FLOAT,
  currentReport VARCHAR(255),
  currentAge INT,
  FOREIGN KEY (userId) REFERENCES User(id),
  FOREIGN KEY (incomeID) REFERENCES Income(incomeID),
  FOREIGN KEY (survivingCostID) REFERENCES ServicingCost(survivingCostID),
  FOREIGN KEY (splurgeCostID) REFERENCES SplurgeCost(splurgeCostID)
);

CREATE TABLE PastReport (
  id VARCHAR(255) PRIMARY KEY,
  userId VARCHAR(255),
  reportName VARCHAR(255),
  createdAt DATE,
  FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE FIREReport (
  id VARCHAR(255) PRIMARY KEY,
  reportGroup VARCHAR(255),
  yearsToFIRE INT,
  FIREType VARCHAR(255),
  FOREIGN KEY (reportGroup) REFERENCES PastReport(id)
);

CREATE TABLE CashSuperYear (
  id VARCHAR(255) PRIMARY KEY,
  FIREReportId VARCHAR(255),
  year INT,
  cashLeft FLOAT,
  superLeft FLOAT,
  FOREIGN KEY (FIREReportId) REFERENCES FIREReport(id)
);

CREATE TABLE FIREType (
  id VARCHAR(255) PRIMARY KEY,
  type VARCHAR(255)
);