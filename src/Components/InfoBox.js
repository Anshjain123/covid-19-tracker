import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const InfoBox = ({ title, cases, total }) => {


  
  return (
    <div>
      <Card sx={{ minWidth: 275, width:'auto' }}>
        <CardContent >
          <Typography sx={{ fontSize: 17, margin: 1 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div" sx={{ margin: 0.5, fontWeight: 550, color:(title === "Recovered" ? 'green' : 'red') }}>
            +{cases}
          </Typography>
          <Typography sx={{ margin: 1, mb: -1.5 }} color="text.secondary">
            {total} - total
          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}

export default InfoBox
