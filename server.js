
    const express = require('express');
    const cors = require('cors');
    const app = express();
    app.use(cors());

    app.get('/api/quiz', (req, res) => {
        res.json({ message: 'Your AI beauty result: Stunning!' });
    });

    app.listen(3000, () => console.log('Server running on port 3000'));
    