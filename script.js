const unList = document.querySelector('ul');
const img = document.querySelector('img');
const btn = document.querySelector('#btn');

const apiRequest = async () => {

    const request = await fetch('https://api.punkapi.com/v2/beers')
    const resRequest = await request.json();
    console.log(resRequest);

    const arrMapped = resRequest.map(item => {
        console.log(item);
        const list = document.createElement('li')
        list.textContent = `name: ${item.name} date: ${item.first_brewed} image: ${item.image_url} description: ${item.description}`
        unList.appendChild(list);
        return{
            name: item.name,
            date: item.first_brewed,
            image: item.image_url,
            description: item.description
        }

    });
    console.log(arrMapped);
    btn.addEventListener('click', () =>{
        document.querySelectorAll('li').forEach(el => {
            el.remove();
        });
    });
}

apiRequest();   