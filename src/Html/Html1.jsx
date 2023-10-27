import Video1 from './Video/earth.mp4'
const Html1=()=>{
    return(
        <div>
            {/* <video src={Video1}></video> */}
            
            <h1>Table</h1>
            <table border={1} cellSpacing={'20px'} cellPadding={'20px'}>
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>A</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>B</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>C</td>
                        <td>30</td>
                    </tr>
                </tbody>
                    <tfoot>

                        <tr >
                            <td colSpan={3}>abc123@email.com</td>
                        </tr>
                    </tfoot>
            </table>
        </div>
    )
}
export default Html1