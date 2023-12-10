<script>
    import c1 from  "$lib/carousel/c1.png";
    import c2 from  "$lib/carousel/c2.png";
    import c3 from  "$lib/carousel/c3.png";
    import c4 from  "$lib/carousel/c4.png";
    import c5 from  "$lib/carousel/c5.png";
    import CarouselImage from "../CarouselImage.svelte";
    import heroImage from "$lib/vaghero.jpeg";
</script>

<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
        <p class="lead">
            Vagdevi junior college & IIT-NEET academy is located at new town, Mahabubnagar, Telangana. Since its inception,
            it has produced considerable state and all india ranks in IIT-JEE (mains & advanced), NEET, EAMCET and Intermediate.
            Striving best for the success of students and reaching the expectations of parents. Education with moral'
        </p>
    </div>
</div>

<div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h3 class="display-5 fw-bold lh-1 text-body-emphasis">Highlights of the college</h3>
            <ul class="lead">
                <li>Vagdevi junior college & IIT-NEET academy is located at Newtown, Mahabubnagar, Telangana.</li>
                <li>Since its inception, it has produced many state and all india ranks in NEET, IIT-NEET mains, EAMCET and Intermediate.</li>
                <li>Striving best for the success of students & reaching the expectations of parents. </li>
                <li>One of our students achieved wonder book of records</li>
                <li>Education along with moral values - ethics is our motto.</li>
            </ul>
        </div>
        <div class="col-lg-4">
            <img class="rounded-lg-3" src={heroImage} alt="vagdevi-brouchure" width="100%">
        </div>
    </div>
</div>

<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
    </div>
    <div class="carousel-inner">
        <CarouselImage img={c1} />
        <CarouselImage img={c2} />

        <div class="carousel-item active">
            <div class="d-flex justify-content-center">
                <img width="400px" height="400px"  aria-hidden="true"  src={c3} alt="s"/>
            </div>
        </div>

        <CarouselImage img={c4} />
        <CarouselImage img={c5} />
    </div>

    <button class="carousel-control-prev cnav" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next cnav" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

</div>

<style>
    .cnav {
        background-color: gray;
    }
</style>

