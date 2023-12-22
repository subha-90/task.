const User = require('./models/User');
const crypto = require('crypto');

signupUser = async (req, res) => {
  try {
    
        const existingUser = await User.findOne({ mobile: req.body.mobile });
        if (existingUser) {
          return res.status(400).json({ error: 'User with this mobile number already exists' });
        }
        if (!req.body.dob || !req.body.mobile || !req.body.firstName ||  !req.body.lastName || !req.body.aadhar ||  !req.body.password || !req.body.address || !req.body.state || !req.body.city || !req.body.pincode) {
          return res.status(400).json({ error: 'All mandatory fields must be provided' });
        }
    
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(req.body.mobile)) {
          return res.status(400).json({ error: 'Invalid mobile number format' });
        }
    
        const dobParts = req.body.dob.split('/');
        const userBirthDate = new Date(`${dobParts[1]}/${dobParts[0]}/${dobParts[2]}`);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - userBirthDate.getFullYear();
    
        if (age < 18) {
          return res.status(400).json({ error: 'User must be at least 18 years old' });
        }

        const hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('hex');
        const newUser = new User(req.body);
        await newUser.save();
        
        res.status(201).json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    

    

   
  

signInUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

fetchUser = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


fetchAllUsers = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports={signupUser,signInUser,fetchUser,updateUser,deleteUser,fetchAllUsers};