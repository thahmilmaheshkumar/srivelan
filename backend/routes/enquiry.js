import { Router } from 'express';
import { handleEnquiry } from '../controllers/enquiryController.js';

const router = Router();

router.post('/', handleEnquiry);

export default router;
