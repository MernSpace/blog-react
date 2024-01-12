const express =require('express');
const UsersController=require("../controllers/UsersController");
const categoryController = require('../controllers/categoryController')
const postController = require('../controllers/postController')
const postDetailController = require('../controllers/postDetailController')
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router =express.Router();

// User Manage
router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);

router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);


router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);




//category


router.post('/create-category',categoryController.createCategory);
router.get('/read-category',categoryController.readCategory);
router.get('/update-category/:categoryID',categoryController.updateCategory);
router.get('/delete-category/:categoryID',categoryController.deleteCategory);





//post
router.post('/create-post',postController.createPost);
router.post("/create-post-detail", postDetailController.createPostDetail);


router.get('/read-post',postController.readPost);
router.post('/update-post/:postID',postController.updatePost);
router.post('/delete-post/:postID',postController.deletePost);

router.get('/post-by-category/:categoryID',postController.postByCategory);

router.get("/detail/:postID", postDetailController.readPostDetail);











module.exports=router;






































module.exports=router;