import React from 'react'
import { Chart } from 'react-charts'
 
export default class extends React.Component {
    render() {
        const data = [
                  {
                    label: 'Series 1',
                    data: [[0, 20], [1, 40], [2, 34], [3, 60], [4, 125]]
                  },
                ]
         
        const axes = [
                { primary: true, type: 'linear', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]
        
        return (
            <div
                style={{
                    marginRight:'5vw',
                    width: '300px',
                    height: '200px'
                }}
            >
                <Chart data={data} axes={axes} />
            </div>
        )
    }
}