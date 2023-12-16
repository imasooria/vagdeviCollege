<script>
    import heroImage from "$lib/vaghero.jpeg";
    import c1 from  "$lib/carousel/c1.png";
    import c2 from  "$lib/carousel/c2.png";
    import c3 from  "$lib/carousel/c3.png";
    import c4 from  "$lib/carousel/c4.png";
    import c5 from  "$lib/carousel/c5.png";
    import CarouselImage from "./CarouselImage.svelte";
    import Carousel from "./Carousel.svelte";
</script>


<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
        <p class="lead">
            Vagdevi junior college & IIT-NEET academy is located at new town, Mahabubnagar, Telangana. Since its inception,
            it has produced considerable state and all india ranks in IIT-JEE (mains & advanced), NEET, EAMCET and Intermediate.
            Striving best for the success of students and reaching the expectations of parents. EDUCATION WITH MORAL VALUES'
        </p>
    </div>
</div>

<Carousel />


<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
        <h1 class=" dptr">Facilities</h1>
        <hr style="color: red">
        <p class="lead">
            We are a growing institution working towards maintaining standards in quality education
        </p>
    </div>
</div>

<style>
    .dptr {
        font-family: 'Dancing Script', cursive;
        font-size: 3rem;
        color: red;
    }
    .cnav {
        background-color: gray;
    }
</style>
