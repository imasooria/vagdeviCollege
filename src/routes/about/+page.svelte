<script>
    import c1 from  "$lib/carousel/c1.png";
    import c2 from  "$lib/carousel/c2.png";
    import c3 from  "$lib/carousel/c3.png";
    import c4 from  "$lib/carousel/c4.png";
    import c5 from  "$lib/carousel/c5.png";
    import nc1 from  "$lib/carousel/nc1.jpg";
    import nc2 from  "$lib/carousel/nc2.png";
    import CarouselImage from "../CarouselImage.svelte";
    import heroImage from "$lib/vaghero.jpeg";
    import Carousel from "../Carousel.svelte";
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


<Carousel />



