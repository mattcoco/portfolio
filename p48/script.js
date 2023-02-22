const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myales',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi iste necessitatibus nisi enim, cum qui est nihil sapiente exercitationem ducimus aperiaommodi, voluptatibus ex ullam, debitis tempore corrupti impedit animi amet in aspernatur recusandae quibusdam reiciendiVoluptate harum alias quod expedita hic repudiandae itaque distinctio quis, volutibus delectus obcaecati fuga odio libero illo quo culpa tempore mollitia vitae ratione architecto inventore earum. Nobis distinctio tenetur libero hic quis qui'  
    },
    {
        name: 'Jane Doe',
        position: 'HR',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi iste necessitatibus nisi commodi, voluptatibus ex ullam, debitis tempore corrupti impedit ate harum alias quod expedita hic repudiandae itaque distinctio quis, voluptatibus delectus obcaecati fuga odio libero illo quo culpa te. Nobis distinctio tenetur libero hic quis qui'  
    },
    {
        name: 'Utada Hikaru',
        position: 'Sales',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Lorem  dolor sit amet, consectetur adipisicing elit. Ad eligendi iste necessitatibus nisi enim, cum qui est nihil sapiente exercitationem ducimus aperiam commodi, voluptaamet in aspernatur recusandae quibusdam reiciendis. te harum alias quod expedita hic repudiandae itaque distinctio quis, voluptatibus delectus obcaecati fuga odio libero illo quo culpa tempore mollitia vitae ratione architecto inventore earum. Nobis distinctio tenetur libero hic quis qui'  
    },
    {
        name: 'Beatrice Morin',
        position: 'Logistics',
        photo: 'https://randomuser.me/api/portraits/women/38.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi iste necessitatibus modi, voluptatibus ex ullam, debitis tempore corrupti impedit animi amet in aspernatur recusandae quibusdam reiciendis.inctio quis, voluptatibus delectus obcaecati fuga odio libero illo quo culpa t mollitia vitae ratione architecto inventore earum. Nobis distinctio tenetur libero hic quis qui'  
    },
    {
        name: 'Philippe Johnson',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/men/46.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi iste necessitatibus nisi enim, cum qui est nihil sapiente exercitationem dupedit animi amet in aspernatur recusandae quibusdam reiciendis. Voluptate harumbus delectus obcaecati fuga odio libero illo quo culpa tempore mollitia vitae ratione architecto inventore earum. Nobis distinctio tenetur libero hic quis qui'  
    },
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    // Dentro de cada etiqueta HTML cambiamos el valor de name, position, photo y text dentro del array testimonials[]
    username.innerHTML = name;
    role.innerHTML = position;
    userImage.src = photo;
    testimonial.innerHTML = text;

    // Los valores de dentro de las etiquetas se preparan para cambiar en la próxima iteración
    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}
updateTestimonial()
setInterval(updateTestimonial, 10000)