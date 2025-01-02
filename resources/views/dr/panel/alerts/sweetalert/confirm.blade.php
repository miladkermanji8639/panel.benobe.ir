@if(session('swal-confirm'))

<script>
    Swal.fire({
        title: "Do you want to save the changes?"
        , showDenyButton: true
        , showCancelButton: true
        , confirmButtonText: "بله خارج میشوم"
        , denyButtonText: `نه خارج نمیشوم`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("خروج موفقیت آمیز!", "", "با موفقیت خارج شدید");
        } else if (result.isDenied) {
            Swal.fire("خارج نشدید", "", "info");
        }
    });

</script>
@endif
