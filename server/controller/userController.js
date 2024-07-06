const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserData = require("../model/User");

const registerUser = async(req,res)=>{
    try {
        console.log('req: ', req.body);
        const {name,email,mobile,password} =req.body;
        // Hash the password
       const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser=new UserData({
            name,
            email,
            mobile,
            password: hashedPassword
        })
        await newUser.save();
        res.status(201).json({status:200,message:'User registered successfully'});
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Email or Mobile Number already used' });
    }
}

const loginUser =async(req,res)=>{
    try {
        const {email,password} =req.body;
  // Check if the user with the provided email exists
    const user = await UserData.findOne({ email });
     if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Generate a JWT token for the authenticated user
      const token = jwt.sign({ id: user._id, name:user.name,email:user.email,role:user.role,mobile:user.mobile }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('token: ', token);
    // Send the JWT token as a response to the client
     res.status(200).json({status:200,message:"User logged in successfully",token: token})
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ message: 'Error login user' });
    }
}

const googleLogin = async(req, res) => {
    try {
       const{email,name}=req.body;
       // Check if the user exists in the database
       let user = await UserData.findOne({ email });
       if(!user) {
       // If user doesn't exist, create a new user
        user = new UserData({
       name,
       email,
       mobile:"",
       password: '', // No password for Google login users
      });
      await user.save();
    //  await console.log('user4444: ', user);
       }
    //    console.log('user4444: ', user);
       // Generate a JWT token for the authenticated user
    const token = jwt.sign({id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({status:200,message: "User logged in successfully", token });
    } catch (error) {
        console.error('Error verifying Google token: ', error);
        res.status(500).json({ message: 'Error logging in user' });
    }
}

const currentUser = async(req,res)=>{
try {
    console.log(req.userId,"PPPPP")
    const user = await UserData.findById(req.userId).select('-password'); //remove password from user
    console.log('user: ', user);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({status:200,user})
} catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error retrieving user data' });
}
}


module.exports ={googleLogin,loginUser, registerUser,currentUser}