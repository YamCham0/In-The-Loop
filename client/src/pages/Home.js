import React from 'react'
import { Link } from 'react-router-dom'
import Btnimg from '../images/Btn.png'
import '../Style/Home.css'

//import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box  from '@mui/material/Box'


export default function Home () {
    
    return(
        <div>
            <Box>
                <Button variant="contained" className='loginBtn' style={{ background: '#C7BCB9', border: '2px solid black', borderRadius: 0, cursor: 'pointer'}} sx={{margin: 1}}><Link to={`/login`} style={{textDecoration: 'none', color: 'white', fontFamily: 'SilkscreenNormal', backgroundImage: `url(${Btnimg})`,  }}>Login</Link></Button>
                <Button variant="contained" className='loginBtn' style={{ background: '#C7BCB9', border: '2px solid black', borderRadius: 0 }} sx={{margin: 1}}><Link to={`/signup`}>Sign Up</Link></Button>
            </Box>
        </div>
    )
}

//backgroundImage: `url(${Btnimg})`
// boxShadow: 'inset 2px 2px 1px purple '