<script>
  import {
    Label,
    Input,
    InputAddon,
    ButtonGroup,
    Radio,
  } from "flowbite-svelte";
  import {
    EnvelopeSolid,
    UserCircleSolid,
    QuestionCircleSolid,
  } from "flowbite-svelte-icons";
  let inline1 = 'second';
</script>

<form class="ml-12">
  <div class="mb-6">
    <Label for="input-group-1" class="block mb-2">Your Email</Label>
    <ButtonGroup class="w-full inline-flex rounded-lg shadow-sm">
      <InputAddon class="text-sm px-3 border-gray-300 dark:border-gray-600 text-gray-500 bg-gray-200 dark:bg-gray-600 dark:text-gray-400 dark:border-r-gray-700 dark:last:border-r-gray-600 inline-flex items-center border-t border-b first:border-l border-r first:rounded-l-lg last:rounded-r-lg">
        <EnvelopeSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </InputAddon>
      <Input id="email" type="email" placeholder="john@example.com" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm first:rounded-l-lg last:rounded-r-lg border-l-0 first:border-l last:border-r" />
    </ButtonGroup>
  </div>
  <div class="mb-6">
    <Label for="name" class="block mb-2">Name</Label>
    <ButtonGroup class="w-full inline-flex">
      <InputAddon>
        <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </InputAddon>
      <Input id="name" placeholder="John Doe" required />
    </ButtonGroup>
  </div>
  <div class="mb-6">
  <Label class="block mb-2"></Label>
    <div class="flex gap-3">
      <InputAddon>
        <QuestionCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </InputAddon>
      <Radio group={inline1} name={inline1} value="yes" class="mr-2" color="orange">Yes</Radio>
      <Radio group={inline1} name={inline1} value="no" class="mr-2" color="orange">No</Radio>
    </div>
  </div>
</form>