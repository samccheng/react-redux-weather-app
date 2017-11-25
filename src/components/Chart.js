import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const Chart = (props) => {
   return (
      <div>
        <Sparklines data={props.data} width={180} height={120}>
          <SparklinesLine color={props.color}/>
        </Sparklines>
        <div>avg {props.avg}</div>
      </div>
    )
}

export default Chart
