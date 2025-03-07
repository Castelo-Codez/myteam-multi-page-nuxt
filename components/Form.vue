<script lang="ts" setup>
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";
const {errors, handleSubmit, defineField} = useForm({
    validationSchema: toTypedSchema(
        z.object({
            name: z
                .string()
                .min(3)
                .max(11)
                .refine((value) => isNaN(Number(value)), {
                    message: "Name Cannot Be a Numbers Only",
                }),
            email: z.string().min(1).email(),
            company: z.string().min(3).max(11),
            title: z.string().min(3).max(11),
        })
    ),
});
const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [company, companyAttrs] = defineField("company");
const [title, titleAttrs] = defineField("title");
const onSumbit = handleSubmit((values) => {
    if (values) {
        console.log(values);
    }
});
</script>
<template>
    <form class="flex flex-col gap-y-4" @submit="onSumbit">
        <input
            class="block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem] border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
            id="name"
            placeholder="Name"
            v-model="name"
            v-bind="nameAttrs"
        />
        {{ errors }}
        <p class="text-color-light-coral" v-if="errors.name">
            {{ errors.name }}
        </p>

        <input
            placeholder="Email"
            class="block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem] border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
            id="email"
            v-model="email"
            v-bind="emailAttrs"
        />
        <p class="text-color-light-coral" v-if="errors.email">
            {{ errors.email }}
        </p>

        <input
            placeholder="Company"
            class="block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem] border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
            id="company"
            v-model="company"
            v-bind="companyAttrs"
        />
        <p class="text-color-light-coral" v-if="errors.company">
            {{ errors.company }}
        </p>
        <input
            placeholder="Title"
            class="block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem] border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
            id="title"
            v-bind="titleAttrs"
            v-model="title"
        />

        <p class="text-color-light-coral" v-if="errors.title">
            {{ errors.title }}
        </p>

        <textarea
            placeholder="Message *optional"
            id="message"
            class="resize-none p-4 bg-transparent font-[700] border-b text-color-white text-[1rem] border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
        ></textarea>
        <input
            class="block py-3 px-8 w-fit bg-color-white rounded-full text-[1.1rem] font-[900] mt-5 cursor-pointer"
            type="submit"
            value="Submit"
        />
    </form>
</template>
