import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';

import useRoutes from './routes/router.js';

const app = express();
const port = process.env.PORT || 4000;

app.engine('hbs', engine({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: './views/layouts'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use('/', useRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));