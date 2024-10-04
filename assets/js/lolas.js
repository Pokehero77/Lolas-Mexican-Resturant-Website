/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const appetizers = document.getElementById('Appetizers');
const salads = document.getElementById('Salads');
const nachos = document.getElementById('Nachos');
const beef = document.getElementById('Beef');
const chicken = document.getElementById('Chicken');
const pork = document.getElementById('Pork');
const mixto = document.getElementById('Mixto');
const burritoLovers = document.getElementById('Burrito Lovers');
const chimichangas = document.getElementById('Chimichangas');
const mixDelMar = document.getElementById('Mix del Mar');
const quesadillas = document.getElementById('Quesadillas');
const seafood = document.getElementById('Seafood');
const lolasSpecials = document.getElementById('Lola\'s Specials');
const fajitas = document.getElementById('Fajitas');
const enchiladas = document.getElementById('Enchiladas');
const kidsMenu = document.getElementById('Kids Menu');
const sideOrders = document.getElementById('Side Orders');

const menuItems = {
    appetizers: [
        { price: "$6.99", name: "Queso Fundido" },
        { price: "$4.19", name: "Chicken Nuggets" },
        { price: "$3.99", name: "French Fries" },
        { price: "$5.99", name: "Cheese Fries" },
        { price: "$4.99", name: "Bean Dip" },
        { price: "$1.50", name: "Sour Cream" },
        { price: "$4.19", name: "Queso Dip" },
        { price: "$8.79", name: "Seafood Dip" },
        { price: "$5.89", name: "Spinach Dip" },
        { price: "$4.50", name: "Guacamole Dip" },
        { price: "$6.99", name: "PicaGuaca" },
        { price: "$2.89", name: "Pico De Gallo" },
        { price: "$2.79", name: "Shredded Cheese" },
        { price: "$2.09", name: "Jalapeño Slices" },
    ], 
    salads: [
        { price: "$11.99", name: "Chicken Salad" },
        { price: "$13.29", name: "Shrimp Salad" },
        { price: "$11.99", name: "Ensalada Cancún" },
        { price: "$6.69", name: "Guacamole Salad" },
        { price: "$10.99", name: "Fajita Taco Salad" },
        { price: "$15.99", name: "Tilapia Salad" },
        { price: "$10.99", name: "Shrimp Taco Salad" },
    ], 
    nachos: [
        { price: "$13.99", name: "Texanos" },
        { price: "$11.95", name: "Supremos" },
        { price: "$8.99", name: "Nachos con Carne" },
        { price: "$8.99", name: "Nachos con Pollo" },
        { price: "$7.69", name: "Nachos Con Frijol" },
        { price: "$7.59", name: "Nachos Con Queso" },
        { price: "$9.69", name: "Nachos Con Vegetales" },
        { price: "$12.69", name: "Fajita Nachos" },
        { price: "$13.99", name: "Nachos Santa Fe" },
        { price: "$10.49", name: "Nachos con Chorizo" },
        { price: "$13.99", name: "Nachos Camarón" },
    ], 
    beef: [
        { price: "$19.99", name: "Steak Ranchero" },
        { price: "$22.49", name: "Steak a Lola's" },
        { price: "$15.99", name: "Carne Asada" },
        { price: "$13.99", name: "El Paso" },
        { price: "$16.29", name: "Carne en su Jugo" },
        { price: "$13.29", name: "Tacos de Carne Asada" },
        { price: "$13.69", name: "Tacos a la Diabla" },
        { price: "$13.79", name: "Birria Tacos" },
        { price: "$20.99", name: "Steak Azteca" },
    ], 
    chicken: [
        { price: "$13.49", name: "Pollo Ranchero" },
        { price: "$13.49", name: "Pollo Sinaloa" },
        { price: "$14.49", name: "Pollo Michoacano" },
        { price: "$13.49", name: "Pollo a la Parrilla" },
        { price: "$12.99", name: "Pollo Feliz" },
        { price: "$10.49", name: "A.C.P." },
        { price: "$13.49", name: "Pollo con Mole" },
        { price: "$13.69", name: "Chori Pollo" },
        { price: "$13.49", name: "Tacos de Pollo Asado" },
        { price: "$13.49", name: "Tacos de Tinga" },
        { price: "$13.69", name: "Chori Tacos" },
    ],
    pork: [
        { price: "$14.69", name: "Carnitas" },
        { price: "$13.69", name: "Tacos de Carnitas" },
        { price: "$13.69", name: "Tacos al Pastor" },
    ],
    mixto: [
        { price: "$15.99", name: "Casuelon" },
        { price: "$13.69", name: "A.C. Texano" },
        { price: "$25.99", name: "Molcajete Mar y Tierra" },
        { price: "$25.99", name: "Parrillada Mixta" },
    ],
    burritoLovers: [
        { price: "$11.79", name: "Burrito Grande" },
        { price: "$11.79", name: "Burrito California" },
        { price: "$13.79", name: "Burrito a la Mexicana" },
        { price: "$10.49", name: "Burrito Roqueta" },
        { price: "$10.49", name: "Steak and Cheese Burrito" },
        { price: "$10.49", name: "Burrito Colorado" },
        { price: "$10.49", name: "Burrito Verde" },
        { price: "$10.69", name: "Burritos Deluxe" },
        { price: "$10.99", name: "Burrito Fiesta" },
        { price: "$11.39", name: "Burrito Fajita" },
    ],
    chimichangas: [
        { price: "$8.79", name: "Shredded Chicken, Ground Beef, Beef Tips" },
        { price: "$9.19", name: "Grilled Chicken" },
        { price: "$9.19", name: "Steak Strips" },
        { price: "$12.59", name: "Steak Strips" },
        { price: "$9.19", name: "Vegetables" },
        { price: "$9.99", name: "Camaron" },
    ],
    mixDelMar: [
        { price: "$15.49", name: "Arroz con Mariscos" },
        { price: "$15.99", name: "Mariscos Gobernador" },
        { price: "$12.49", name: "Seafood Taco Salad" },
    ],
    quesadillas: [
        { price: "$11.79", name: "Fajita Quesadilla" },
        { price: "$13.29", name: "Texas Fajita Quesadilla" },
        { price: "$14.99", name: "Shrimp Fajita Quesadilla" },
        { price: "$10.49", name: "Shredded Chicken, Ground Beef, Beef Tips, Shredded Beef, or Spinach" },
        { price: "$9.09", name: "Beans" },
        { price: "$10.99", name: "Grilled Steak Strips" },
        { price: "$10.99", name: "Grilled Chicken Strips" },
        { price: "$12.75", name: "Grilled Shrimp" },
        { price: "$9.99", name: "Grilled Vegetables" },
        { price: "$9.99", name: "Sauteeed Mushrooms" },
    ],
    seafood: [
        { price: "$15.99", name: "Plato Veracruz" },
        { price: "$15.99", name: "Camarón Pacífico" },
        { price: "$15.99", name: "Camarón Fundido" },
        { price: "$15.99", name: "Camarón a la Diabla" },
        { price: "$14.49", name: "Ceviche de Camarón" },
        { price: "$13.89", name: "A.C.C." },
        { price: "$14.99", name: "Coctel de Camarón" },
        { price: "$12.49", name: "Tacos de Camarón" },
        { price: "$15.99", name: "Camarón El Presidente" },
        { price: "$14.49", name: "Filete Vallarta" },
        { price: "$12.99", name: "Ceviche de Pescado" },
        { price: "$13.69", name: "Tacos de Pescado" },
        { price: "$15.49", name: "Mojarra Frita" },
        { price: "$15.49", name: "Camarones al Mojo de Ajo" },
    ],
    lolasSpecials: [
        { price: "$11.49", name: "Chilaquiles Mexicanos" },
        { price: "$11.49", name: "Taquitos Mexicanos" },
    ],
    fajitas: [
        { price: "$13.99", name: "Chicken Fajitas" },
        { price: "$13.99", name: "Steak Fajitas" },
        { price: "$14.29", name: "Mixed Fajitas" },
        { price: "$15.29", name: "Texas Fajitas" },
        { price: "$16.69", name: "Camarón Fajitas" },
        { price: "$12.99", name: "Vegetables Fajitas" },
        { price: "$19.29", name: "Del Mar Fajitas" },
    ],
    enchiladas: [
        { price: "$12.29", name: "Enchiladas Rancheras" },
        { price: "$12.29", name: "Enchiladas Supremas" },
        { price: "$12.49", name: "Enchiladas Mexicanas" },
        { price: "$10.69", name: "Enchiladas Verdes" },
        { price: "$10.69", name: "Enchiladas con Mole" },
    ],
    kidsMenu: [
        { price: "$5.89", name: "Burrito and Taco" },
        { price: "$5.89", name: "Enchilada" },
        { price: "$5.89", name: "Taco and Enchilada" },
        { price: "$5.89", name: "Taco, Rice, and Beans" },
        { price: "$5.89", name: "Cheese Quesadilla" },
        { price: "$5.89", name: "Chicken Nuggets" },
        { price: "$5.99", name: "Cheeseburger" },
        { price: "$5.89", name: "Cheese Pizza with a fruit cup" },
        { price: "$5.89", name: "Macaroni and Cheese with a fruit cup" },
        { price: "$6.69", name: "Mini A.C.P" },
    ],
    sideOrders: [
        { price: "$3.89", name: "Rice" },
        { price: "$5.79", name: "Cheese Rice" },
        { price: "$3.89", name: "Beans" },
        { price: "$5.09", name: "Rice and Beans" },
        { price: "$3.89", name: "Whole Black Beans" },
        { price: "$1.69", name: "Tortillas" },
        { price: "$3.99", name: "Grilled Vegetables" },
        { price: "$3.99", name: "Steamed Vegetables" },
        { price: "$4.29", name: "Nopalitos" },
        { price: "$3.89", name: "Tamales" },
        { price: "$4.19", name: "Chile Rellenos" },
        { price: "$3.99", name: "Tostadas" },
        { price: "$3.79", name: "Beef or Chicken" },
        { price: "$5.99", name: "Shrimp" }
    ]
}
        
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }
