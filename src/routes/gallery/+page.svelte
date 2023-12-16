<script>
    import i1 from "$lib/vg1.jpg";
    import i1s from "$lib/vg1s.png";
    import i2 from "$lib/vg2full.jpg";
    import i2s from "$lib/vg2.png"
    import i3 from "$lib/vg3.jpg";
    import i3s from "$lib/vg3s.png"
    import i5s from "$lib/i5s.png"
    import i6s from "$lib/i6s.png"
    import i7s from "$lib/i7s.png"
    import i8s from "$lib/i8s.png"
    import ng1 from "$lib/ng1.jpg"
    import ng2 from "$lib/ng2.jpg"
    import ng3 from "$lib/ng3.jpg"
    import ng4 from "$lib/ng4.jpg"
    import ng5 from "$lib/ng5.jpg"
    import ng6 from "$lib/ng6.jpg"
    import ng7 from "$lib/ng7.jpg"
    import ng8 from "$lib/ng8.jpg"
    import ng9 from "$lib/ng9.jpg"
    import ng10 from "$lib/ng10.jpg"
    import ng11 from "$lib/ng11.png"
    import ng12 from "$lib/nh12.png"
    import ng13 from "$lib/ng13.jpeg"
    import GalleryImage from "./GalleryImage.svelte";
</script>

<div class="album py-5 bg-body-tertiary">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <GalleryImage image={i1s} imgFull={i1} description="Vagdevi Student bags prestigious award" id="m1" modalDescription="" />
            <GalleryImage image={i2s} imgFull={i2} description="Vagdevi stands out in NEET Ranks" id="m2" modalDescription=""/>
            <GalleryImage image={i3s} imgFull={i3} description="Vagdevi student gets top tank in JEE" id="m3" modalDescription=""/>

            <GalleryImage image={i5s} imgFull={i5s} description="Vagdevi student performances to collector office" id="m5" modalDescription="Vagdevi students given traditional dance performance at collectorate office on the occasion of Telangana formation day"/>
            <GalleryImage image={i6s} imgFull={i6s} description="Felicitation of district collector" id="m6" modalDescription="Vagdevi college correspondent Vijetha Venkat Reddy felicitating district collector Sri. Ravi Garu"/>
            <GalleryImage image={i7s} imgFull={i7s} description="Felicitation of Vagdevi college correspondent" id="m7" modalDescription="Vagdevi college correspondent Vijetha Venkat Reddy felicitated on the eve of summer science camp hosted at Vagdevi junior college"/>

            <GalleryImage image={i8s} imgFull={i8s} description="Model NEET exam conducted by Malla reddy group of institutions" id="m8" modalDescription="Malla reddy group of institutions conducted model NEET exam at our campus supervised by MR. MD. Shakeer, lecturer in zoology"/>
            <GalleryImage image={ng1} imgFull={ng1} description="" id="ng1" modalDescription=""/>
            <GalleryImage image={ng2} imgFull={ng2} description="" id="ng2" modalDescription=""/>

            <GalleryImage image={ng3} imgFull={ng3} description="" id="ng3" modalDescription=""/>
            <GalleryImage image={ng4} imgFull={ng4} description="" id="ng4" modalDescription=""/>
            <GalleryImage image={ng5} imgFull={ng5} description="" id="ng5" modalDescription=""/>

            <GalleryImage image={ng6} imgFull={ng6} description="" id="ng6" modalDescription=""/>
            <GalleryImage image={ng7} imgFull={ng7} description="" id="ng7" modalDescription=""/>
            <GalleryImage image={ng8} imgFull={ng8} description="" id="ng8" modalDescription=""/>

            <GalleryImage image={ng9} imgFull={ng9} description="" id="ng9" modalDescription=""/>
            <GalleryImage image={ng10} imgFull={ng10} description="" id="ng10" modalDescription=""/>
            <GalleryImage image={ng11} imgFull={ng11} description="" id="ng11" modalDescription=""/>
            <GalleryImage image={ng12} imgFull={ng12} description="" id="ng12" modalDescription=""/>
            <GalleryImage image={ng13} imgFull={ng13} description="" id="ng13" modalDescription=""/>
        </div>
    </div>
</div>

