<script>
    import c1 from  "$lib/carousel/c1.png";
    import c2 from  "$lib/carousel/c2.png";
    import c3 from  "$lib/carousel/c3.png";
    import c4 from  "$lib/carousel/c4.png";
    import c5 from  "$lib/carousel/c5.png";
    import nc1 from  "$lib/carousel/nc1.jpg";
    import nc2 from  "$lib/carousel/nc2.png";
    import heroImage from "$lib/vaghero.jpeg";
    import CarouselImage from "./CarouselImage.svelte";
</script>


<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
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
<!--        <CarouselImage img={c5} />-->
        <CarouselImage img={nc1} />
        <CarouselImage img={nc2} />
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
