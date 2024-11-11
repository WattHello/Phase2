const Rating = require('../models/Rating.js');
const Quiz = require('../models/Quiz.js');

exports.rateQuiz = async (req, res) => {
    try {
        const { rating } = req.body;
        const quizId = req.params.quizId;
        const userId = req.user._id;

        let ratingDoc = await Rating.findOne({ quiz: quizId, user: userId });
        
        if (ratingDoc) {
            ratingDoc.rating = rating;
            await ratingDoc.save();
        } else {
            ratingDoc = new Rating({ quiz: quizId, user: userId, rating });
            await ratingDoc.save();
        }

        const avgRating = await Rating.aggregate([
            { $match: { quiz: quizId } },
            { $group: { _id: null, avgRating: { $avg: "$rating" } } }
        ]);

        await Quiz.findByIdAndUpdate(quizId, { averageRating: avgRating[0]?.avgRating || 0 });

        res.json(ratingDoc);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getQuizRatings = async (req, res) => {
    try {
        const ratings = await Rating.find({ quiz: req.params.quizId });
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};