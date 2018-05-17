
function Students(props){
    let date =  "1/1/2018";
    let studentDivs = props.students.map(s=> <Student student={s}  date={date}/>)
    return (
      <div>
        {studentDivs}
     </div>
    )
 }
 
//  module.exports = Students;
