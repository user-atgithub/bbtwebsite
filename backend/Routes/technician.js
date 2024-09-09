import express from "express";
import { 
    updateTechnician, 
    deleteTechnician, 
    getAllTechnicians,
    getSingleTechnician,
    getTechnicianProfile

} from "../Controllers/technicianController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js"

const router = express.Router();

// nested route
router.use("/:technicianId/reviews", reviewRouter);

router.get("/:id", getSingleTechnician);
router.get("/", getAllTechnicians);
router.put("/:id", authenticate, restrict(["technician"]), updateTechnician);
router.delete("/:id", authenticate, restrict(["technician"]), deleteTechnician);
router.get('/profile/me', authenticate,restrict(['technician']), getTechnicianProfile)

export default router;
