<script lang="ts">
    const triggerMessage = (): void => {
        console.log("Hello, Skeleton");
    };
</script>

<button class="btn btn-filled-primary" on:click={triggerMessage}>Trigger</button
>
