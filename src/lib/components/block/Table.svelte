<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  export let data: TableBlockData;
</script>

<Table striped={true}>
    {#if data.withHeadings}
        <TableHead>
            {#each data.content[0] as heading}
                <TableHeadCell>{heading}</TableHeadCell>
            {/each}
        </TableHead>
    {/if}
    <TableBody>
        {#each data.content as row}
            <TableBodyRow>
                {#each row as cell}
                    <TableBodyCell>{cell}</TableBodyCell>
                {/each}
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
