


fetch("https://api.myjson.online/v1/records/d3864359-a07a-4c60-8e66-b6ae62e72d7d")
.then((response) => response.json())
.then(data => {
    console.log("🚀 ~ data:", data)

    let htmlProduct = ""
    for(let i = 0; i < data.data.length; i++) {
        htmlProduct += 
        `
        <div class="card" style="width: 18rem;">
        <img src=" ${ data.data[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${ data.data[i].namePro}</h5>
          <p class="card-text">${ data.data[i].desc}</p>
          <p class="price" >Price: ${ data.data[i].price}</p>
          <button href="#" class="btn-pro">Add to cart</button>
        </div>
      </div>
        `
    }
    document.getElementById("product-panel").innerHTML = htmlProduct;
})
