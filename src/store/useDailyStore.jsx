import { create } from "zustand";
import { generateIdNumber } from "../utils";

import { accountsName } from "../data/data";

export const useDailyStore = create((set, get) => ({
  daily: {
    name: "Paco",
    propietaryName: "Nerfis",
    year: 2005,
    records: {
      "111": {
        key: "111",
        date: { day: 21, month: 5 },
        movement: [
          { account: accountsName.cxc, amount: 5000, action: "debit", key: 0 },
          { account: accountsName.a, amount: 5000, action: "credit", key: 1 },
        ]
      }
    }
  }
}))