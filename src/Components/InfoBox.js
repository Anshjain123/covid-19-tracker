import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import numeral from 'numeral';
import './InfoBox.css'
const InfoBox = ({ title, cases, total, active, ...props }) => {


  
  return (
    <div>
      <Card className = {`cardContainer ${active && "card--selected"} ${title === "Recovered" && "card--color--change"}`} onClick={props.onClick} sx={{ minWidth: 275, width:'auto', cursor:'pointer' }}>
        <CardContent >
          <Typography sx={{ fontSize: 17, margin: 1 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div" sx={{ margin: 0.5, fontWeight: 550, color:(title === "Recovered" ? '#85fc06' : "#CC1034") }}>
            +{numeral(cases).format("0.0a")}
          </Typography>
          <Typography sx={{ margin: 1, mb: -1.5 }} color="text.secondary">
            {numeral(total).format("0.0a")} - total
          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}

export default InfoBox
