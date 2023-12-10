<script>
    export let image
    export let description
    export let imgFull
    export let id
    export let modalDescription;
    let mid = "#"+id
</script>

<div class="col">
    <div class="card shadow-sm">
        <img src={image} class="galleryImage" alt="s">
        <div class="card-body">
            <p class="card-text">{description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary"  data-bs-toggle="modal" data-bs-target={mid}>View</button>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            </div>
            <div class="modal-body">
                <img src={imgFull} alt="s" width="100%">
            </div>
            <div class="modal-footer gallery-modal">
                <p class="lead">{modalDescription}</p>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<style>
    .gallery-modal {
        display: flex;
        flex-direction: column;
    }
</style>


