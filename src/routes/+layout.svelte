<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import banner from '$lib/banner.png';
    import banner2 from '$lib/banner2.png';
    import banner3 from '$lib/banner3.png';
</script>

<p class="h5 centre"> <i class="bi bi-telephone-outbound"></i> &nbsp;9133005511 / 9133005544 &nbsp; <i class="bi bi-envelope-fill"></i>  &nbsp; vijethavenkatreddy@gmail.com </p>

<a class="nav-link active" aria-current="page" href="/"><img class="image" src={banner3} alt="" sizes="" srcset=""></a>

<nav class="navbar navbar-expand-lg nav-bck" aria-label="navbar ">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-around" id="navbarsExample08">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link font" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font" href="/about">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font" href="#" data-bs-toggle="dropdown" aria-expanded="false">Administration</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/administration#correspondent">Correspondent</a></li>
                        <li><a class="dropdown-item" href="/administration#principal">Principal</a></li>
                        <li><a class="dropdown-item" href="/administration#vprincipal">Vice Principal</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown font">
                    <a class="nav-link dropdown-toggle font" href="#" data-bs-toggle="dropdown" aria-expanded="false">Academics</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/courses">Courses Offered</a></li>
                        <li><a class="dropdown-item" href="/courses">Coaching Offered</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle font" href="#" data-bs-toggle="dropdown" aria-expanded="false">Gallery</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item " href="/gallery">College Gallery</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link font" href="/contactus">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<div class="container px-4 py-5" id="featured-3">
    <slot />
</div>


<style>
    .image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .nav-bck {
        background-color: #194e48;
        border-radius: 0.25rem;
        margin: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1.3rem;
    }

    .font {
        color: #F6E399;
    }

    .centre {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color:  #194e48;
        font-size: large
    }

    @media (max-width: 767px) {
        .centre {
            display: none;
        }
    }
</style>
