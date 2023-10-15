import './css/components.css'

function Education() {

  return (
    <div className='container' style={{ backgroundColor: '#181818' }}>
      <div className='section-name'>Education</div>
      <table> 
        <tr>
          <th>Year</th>
          <th>Institution</th>
          <th>Study field</th>
        </tr>
        <tr>
          <td>2021-2023</td>
          <td>University of Pardubice, Faculty of Electrical Engineering and Computer Science</td>
          <td>Master's degree in Information Technology</td>
        </tr>
        <tr>
          <td>2017-2021</td>
          <td>University of Pardubice, Faculty of Electrical Engineering and Computer Science</td>
          <td>Bachelor's degree in Information Technology</td>
        </tr>
        <tr>
          <td>2013-2017</td>
          <td>Secondary Industry School Brno, Purkyňova</td>
          <td>Information Technology</td>
        </tr>
      </table>
    </div>
  )
}

export default Education
