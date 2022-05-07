import `./App.css`;

function ShowFilms(props){
  const films = props.films;
  console.log(props.films, films);
  return(
    <div>
    {
      films.map((film) => {
        return <div>
        <p>{film.id} {film.title} </p>
        </div>
      })
    }
    </div>
  );
}

export default ShowFilms;

