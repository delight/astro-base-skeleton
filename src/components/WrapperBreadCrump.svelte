<script lang="ts">
    import { Breadcrumb, Crumb } from "@skeletonlabs/skeleton";
    const customSeparator: string = `<span class="text-surface-500">/</span>`;
</script>

<Breadcrumb separator={customSeparator}>
    <Crumb href="/">Home</Crumb>
    <Crumb>About</Crumb>
</Breadcrumb>
