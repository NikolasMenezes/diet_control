import { NextFunction, Request, Response } from "express"

export function validateSentGroup(req: Request, res: Response, next: NextFunction) {
  const validFoodGroups = [
    "cereais e derivados",
    "verduras, hortaliças e derivados",
    "gorduras e óleos",
    "pescados e frutos do mar",
    "carnes e derivados",
    "leite e derivados",
    "bebidas (alcoólicas e não alcoólicas)",
    "ovos e derivados",
    "produtos açucarados",
    "miscelâneas",
    "outros alimentos industrializados",
    "alimentos preparados",
    "leguminosas e derivados"
  ]

  const sentGroup = req.body.group as string
  if (!sentGroup) {
    return res.status(400).json({ error: "Group parameter is required" })
  }
  if (!validFoodGroups.includes(sentGroup.toLowerCase())) {
    return res.status(400).json({ error: "Group not Valid" })
  }

  next()
}