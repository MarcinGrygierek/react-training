interface DefaultProps {
    type?: string
 }
 
 interface Props extends DefaultProps {
    name: string,
    skills: Skill[],
 }
 
 export interface Skill {
    id: number,
    desc: string
 }
 
 const defaultProps: DefaultProps = {
    type: 'Hiszpańska'
 }
 
 const Card = (props: Props) => {
    const {type, skills, name} = props;
 

 
    const cardStyle = {
        backgroundImage:
            'url("https://wallpapertag.com/wallpaper/full/b/2/9/559703-free-download-monty-python-wallpaper-1920x1080-samsung.jpg")',
        backgroundRepeat: 'no-repeat',
        width: '1920px',
        height: '1024px',
        border: '2px black solid'
    };
 
    const divStyle = {
        marginTop: '100px',
        marginLeft: '25px'
    }
 
    const spanishInquisitionSkills = skills.map((skill: Skill) =>
        <li key={skill.id}>{skill.desc}</li>)
 
    if(!name) return <h1>Musisz podać imię</h1>

    return (
        <div style={cardStyle}>
            <div style={divStyle}>
                <p>{name}</p>
                <p>{type}</p>
                <p>Wśród naszych metod są:</p>
                <ul>
                    {spanishInquisitionSkills}
                </ul>
            </div>
        </div>
    );
 }
 
 Card.defaultProps = defaultProps;
 
 export default Card;