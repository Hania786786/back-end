/* ==================
             User routes // ShahbazKhalidDev 
             ======================*/
router.get("/users/:id", userController.fetchUserById);
router.patch("/users/:id", userController.updateUserById);
