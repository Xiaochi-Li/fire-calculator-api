const express = require("express");
const router = express.Router();

import { getFinancialProfile, createFinancialProfile, updateFinancialProfile, deleteFinancialProfile } from "./financialProfile.controller";

router.get("/", getFinancialProfile);
router.post("/", createFinancialProfile);
router.put("/", updateFinancialProfile);
router.delete("/", deleteFinancialProfile);