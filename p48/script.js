const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0fdb1e7b4msh391d969ffb0b07ep151e90jsn17d4e3e82cc6',
		'X-RapidAPI-Host': 'testimonial.p.rapidapi.com'
	}
};

// const getUser = fetch('https://testimonial.p.rapidapi.com/api', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const getUser = async () => {
    const url = 'https://testimonial.p.rapidapi.com/api'
    
    console.log(url)
    const res = await fetch(url, options)
    
    console.log(res)
    const data = await res.jason()
    console.log(data)
}