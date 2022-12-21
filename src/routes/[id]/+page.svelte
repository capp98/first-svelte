<script>
    export let data;
    $: title = data.title;
    $: text = data.text;
</script>

<h1>{title}</h1>
<p>{text}</p>