import express from 'express';
import cors from 'cors';
import VenomService from '@/services/venom/venom.service';
import routes from './routes';

const app = express();
app.use(cors());

export const intancedVenomService = new VenomService();
intancedVenomService.initialize();

app.use(express.json());
app.use(routes);

export default app;
