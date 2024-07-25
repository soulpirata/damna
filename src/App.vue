<template>

<div>
 
  <div class="absolute w-[12%] top-0 mt-[34px] ml-[180px] left-0 mr-[70px] overflow-hidden">
  <img src="./assets/logo.png">
  </div>

  <div class="cursor-pointer text-center mt-12 flex gap-10 justify-center text-[20px]">
    <a ref="Home">Home</a>
    <a ref="About Us">About Us</a>
    <a ref="Find centre">Find Centre</a>
    <a ref="Contact Us">Contact Us</a>
  </div>
  
  <div class="absolute w-[35%] mt-15 right-0 mr-[90px] overflow-hidden h-[820px]">
  <img src="./assets/hand.png">
  </div>


  <div class="text-[70px] mt-[200px] ml-40 font-Roboto font-bold">
  Your Partner in <p class="mt-[-20px]"> Health and Wellnclearess</p>
  </div>
  <div class="mt-[25px] text-[30px] ml-40">
  <p>
    We are committed to providing you with the best medical and <p> healthcare services to help you live healthier and happier.</p>
  </p>
  </div>
  <div class="w-full flex justify-center mt-14">
      <div class="bg-white h-[200px] w-[75%] mt-[100px] z-10 rounded-[30px] border-solid border-4 border-[rgb(175,227,255)] shadow-lg flex items-center justify-evenly ">
        <div class="flex w-[400px]">   
          <img class="w-[5rem] h-[5rem]" src="./assets/doctor.png">
          <div>
          <p class="ml-[20px] text-[24px] font-bold">Doctors & Health Workers</p> <p class="ml-[20px] text-[34px] font-semibold text-[274760]">13</p></div>
        </div>
        <div class="flex  w-[350px]">
          <img class="w-[5rem] h-[5rem]" src="./assets/services.png">
          <div>
          <p class="ml-[20px] text-[24px] font-bold">Services</p> <p class="ml-[20px] text-[34px] font-semibold text-[274760]">24*7</p></div>
        </div>
        <div class="flex  w-[400px] h-[5rem]">
          <img class="w-[5rem]" src="./assets/location.png">
          <div ><p class="ml-[20px] text-[24px] font-bold">Locaion</p><p class="ml-[20px] text-[34px] font-semibold text-[274760]">Zuangtui, Aizawl</p></div>
        </div>
      </div>
</div>


  <div>
      <div class="absolute w-[25%] mt-[200px] ml-[180px] overflow-hidden">
      <img src="./assets/hospital.png">
      </div>
  </div>

  <div class="text-[40px] mt-[350px] font-Roboto font-bold ml-[800px]">
  <p>About us</p>
  <div class="flex items-center mt-4">
  <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.5342 13.0789L23.3977 23.5789C23.0977 23.8522 22.6958 24.0034 22.2787 23.9999C21.8615 23.9965 21.4625 23.8388 21.1675 23.5607C20.8726 23.2825 20.7053 22.9063 20.7016 22.513C20.698 22.1197 20.8584 21.7408 21.1482 21.4579L29.5689 13.5184H1.59092C1.16899 13.5184 0.764327 13.3604 0.465971 13.0791C0.167615 12.7978 0 12.4163 0 12.0184C0 11.6206 0.167615 11.2391 0.465971 10.9578C0.764327 10.6765 1.16899 10.5184 1.59092 10.5184H29.5689L21.1482 2.57893C20.9962 2.44056 20.875 2.27505 20.7916 2.09204C20.7083 1.90903 20.6644 1.7122 20.6625 1.51303C20.6607 1.31386 20.7009 1.11635 20.7809 0.932003C20.8609 0.747658 20.9791 0.580179 21.1284 0.439341C21.2778 0.298502 21.4554 0.18712 21.651 0.111698C21.8465 0.0362778 22.056 -0.00167465 22.2672 5.53131e-05C22.4785 0.00178719 22.6872 0.0431671 22.8813 0.12178C23.0754 0.200394 23.251 0.314665 23.3977 0.457932L34.5342 10.9579C34.8325 11.2392 35 11.6207 35 12.0184C35 12.4162 34.8325 12.7976 34.5342 13.0789Z" fill="#307BC4"/>
    </svg> 
    <p class="text-[30px] ml-4 text-[rgb(48,123,196)] font-medium ">The quick brown fox jump over the lazy dog.</p> 
  </div>
  <p class="text-[25px] font-normal ml-10 mt-5 w-[80%] text-[rgb(142,159,172)]">The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.The quick brown fox jump over the lazy dog.</p>
  </div>

  
  <div class="text-[40px] mt-[250px] font-Roboto font-bold justify-center w-full flex flex-col items-center">
  <p>Find Centre</p>
  <div class="flex items-center mt-4">
    <p class="text-[30px] text-[rgb(48,123,196)] font-medium mb-[50px]">The quick brown fox jump over the lazy dog.</p> 
  </div>

      <div class="grid-row grid cursor-pointer" v-for="(doctor, i) in doctors" @click="selectedDoctor = i">
      <div class="grid grid-cols-12">
        <div class="flex gap-6 col-span-5  p-8 rounded-3xl" :class="selectedDoctor === i && 'shadow-lg shadow-[#307ac42f] transform translate-x-14'">
          <img class="w-[10rem]" :src='doctor.image'/>
              <div class="flex flex-col h-full justify-center items-start">
                  <p class="text-3xl">
                    {{ doctor.name }}
                  </p>
                  <p class="text-xl font-normal">
                    {{doctor.hospital}}
                  </p>
            </div>
        </div>
            <div class="col-span-2 flex items-center justify-center">
              <div class="bg-[#307BC4] w-[1px] h-full flex justify-center items-center overflow-visible relative">
                <div class="bg-[#FF658A] rounded-full  absolute" :class="selectedDoctor === i ? 'p-4' : 'p-2'">
                  
                </div>
              </div>
            </div>
                <div v-if="selectedDoctor === i" class="col-span-5 text-xl font-normal text-gray-600 flex items-center">
                  <p class="text-xl font-normal whitespace-pre leading-3">
                    {{doctor.detials}}
                  </p>
                </div>
      </div>

     
    </div>
  </div>

  
  <div class="text-[40px] mt-[300px] font-Roboto font-bold ml-[180px]">
    <p>Contact us</p>
  </div>
<form class="mt-4 ml-[180px] w-[800px]">

  <div>
      <div class="absolute w-[30%] ml-[950px] mt-0 overflow-hidden">
      <img src="./assets/heart.png">
      </div>
  </div>


    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-2xl font-medium text-[rgb(39,71,96)] dark:text-white">Name</label>
            <input type="text" id="name" class="bg-gray-50 mt-4 border border-[rgb(48,123,196)] text-gray-900 text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full h-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"placeholder="Enter your Name" required />
        </div>
        <div>
            <label for="address" class="block mb-2 text-2xl font-medium text-[rgb(39,71,96)] dark:text-white">Address</label>
            <input type="text" id="last_name" class="bg-gray-50 mt-4 border border-[rgb(48,123,196)] text-gray-900 text-lg  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full h-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10" placeholder="Enter Address" required />
        </div>
        <div>
            <label for="phone_number" class="block mb-2 text-2xl font-medium text-[rgb(39,71,96)] dark:text-white">Phone Number</label>
            <input type="text" id="company" class="bg-gray-50 mt-4 border border-[rgb(48,123,196)] text-gray-900 text-lg  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full h-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10" placeholder="Enter phone number" required />
        </div>  
        <div>
            <label for="date_of_birth" class="block mb-2 text-2xl font-medium text-[rgb(39,71,96)] dark:text-white">Date of Birth</label>
            <input type="date" id="company" class="left-0 bg-gray-50 mt-4 border border-[rgb(48,123,196)] text-gray-400 text-lg  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full h-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-10" required />
   

          </div> 
        
        
        <div class="flex w-[900px]">
          <div>
                <label for="first_name" class="block mb-5 text-2xl font-medium text-[rgb(39,71,96)] dark:text-white">Reason for Contact</label>
            <div class="flex gap-10">    
                <div class="flex items-center me-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-radio" class="pl-2 ms-2 text-xl font-medium text-gray-700 dark:text-gray-300">Routine Checkup</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-2-radio" class="pl-2 ms-2 text-xl font-medium text-gray-700 dark:text-gray-300">New Patient</label>
                </div>
                <div class="flex items-center me-4">
                    <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-checked-radio" class="pl-2 ms-2 text-xl font-medium text-gray-700 dark:text-gray-300">Specific Concern</label>
                </div>
            </div>
        </div>
      </div>
    </div>
   
    <button type="submit" class="drop-shadow-md mt-8 text-white bg-[#307BC4] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl w-[30%] h-[63px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

<div class="mt-24">
  <div class="bg-[#A1CBF2] h-[300px] w-full">
    <div class="grid gap-20 md:grid-cols-4 justify-center">
      <div class="ml-20 mt-10 font-semibold text-5xl">
        DAMNA IN
        <div class="relative w-full h-[180px]">
    <iframe class="absolute top-0 left-0 w-full h-[180px] mt-4"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=damna%20in+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
</div>
      </div>

      <div>
          <div class="text-3xl mt-12 font-medium">CONTACT
          </div>
          <div class="mt-6 text-xl">
            Address: Zuangtui, Aizawl, Mizoram <br>
            PIN: 796005 <br>
            Phone No: +91 1234567890 <br>
            Email: damnain@gmail.com
          </div>
      </div>
      <div>
        <div class="text-3xl mt-12 font-medium">RESOURCE
          </div>
          <div class="mt-6 text-xl">
            <a href="#">Disclaimer </a><br>
            <a href="#">FAQ</a><br>
            <a href="#">Privacy Policy </a><br>
          </div>
      </div>
      <div>
        <div class="text-3xl mt-12 font-medium">FOLLOW US
          </div>
          <div class="mt-6 text-xl">
            <a href="#">Instagram </a><br>
            <a href="#">Facebook </a><br>
            <a href="#">Twitter </a><br>
            <a href="#">Youtube </a>
          </div>
      </div>
    </div>
  </div> 

</div>





  
</div>  
</template>

<script setup>
import { ref } from "vue";
import hrekima from './assets/hrekima.png'
import thiamsanga from './assets/thiamsanga.png'
import rindika from './assets/rindika.png'
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const selectedDoctor = ref(0)

const doctors = [
  {
    name: "Thiamsanga",
    image: thiamsanga,
    hospital: "Ebenezer Hospital, Aizawl",
    detials: `
    Name of ARTC : ART Plus Centre \n 
    Civil Hospital Aizawl \n
    ARTC Code : ART-MZ-AZL-01 \n 
    Email : artcebtreazl@yahoo.com \n 
    Pin Code : 796001 \n
    Contact No : 8415853508`    
  },
  {
  name: "hrekima",
  image:  hrekima,
    hospital: "Ebenezer Hospital, Aizawl",
    detials: `
    Name of ARTC : ART Plus Centre \n 
    Civil Hospital Aizawl \n
    ARTC Code : ART-MZ-AZL-01 \n 
    Email : artcebtreazl@yahoo.com \n 
    Pin Code : 796001 \n
    Contact No : 8415853508`   
  },
  {
  name: "lalrindika",
  image: rindika,
    hospital: "Ebenezer Hospital, Aizawl",
    detials: `
    Name of ARTC : ART Plus Centre \n 
    Civil Hospital Aizawl \n
    ARTC Code : ART-MZ-AZL-01 \n 
    Email : artcebtreazl@yahoo.com \n 
    Pin Code : 796001 \n
    Contact No : 8415853508`
  },
]



const dateValue = ref([]);
</script>








