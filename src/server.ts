import { app } from './app';

const PORT_RUNNIG = 3500;
app.listen(PORT_RUNNIG, () => {
    console.log(`Application is running on port ${PORT_RUNNIG}`);
});