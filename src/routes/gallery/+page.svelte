<script>
    import i1 from "$lib/vg1.jpg";
    import i1s from "$lib/vg1s.png";
    import i2 from "$lib/vg2full.jpg";
    import i2s from "$lib/vg2.png"
    import i3 from "$lib/vg3.jpg";
    import i3s from "$lib/vg3s.png"
    import i4s from "$lib/i4s.png"
    import i5s from "$lib/i5s.png"
    import i6s from "$lib/i6s.png"
    import i7s from "$lib/i7s.png"
    import i8s from "$lib/i8s.png"
    import i9s from "$lib/i9s.png"
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
            <GalleryImage image={i7s} imgFull={i7s} description="Felicitation of Vagdevi college correspondent" id="m7" modalDescription="Vagdevi college correspondent Vijetha Venkat Reddy felicitated on the eve of summer science camp hosted at Vageci junior college"/>

            <GalleryImage image={i4s} imgFull={i4s} description="Vagdevi student performances to collector office" id="m4" modalDescription="Vagdevi students given traditional dance performance at collectorate office on the occasion of Telangana formation day"/>
            <GalleryImage image={i8s} imgFull={i8s} description="Model NEET exam conducted by Malla reddy group of institutions" id="m8" modalDescription="Malla reddy group of institutions conducted model NEET exam at our campus supervised by MR. MD. Shakeer, lecturer in zoology"/>
            <GalleryImage image={i9s} imgFull={i9s} description="Model TS EAMCET exam conducted by SFI " id="m9" modalDescription="SFI (Student Federation of India) conducted model TS EAMCET exam at our campus supervised by MR. MD. Shakeer, lecturer in zoology"/>

        </div>
    </div>
</div>

