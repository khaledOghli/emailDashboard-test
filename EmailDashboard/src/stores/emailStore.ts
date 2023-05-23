import { ref, reactive, computed , watch } from 'vue'
import { defineStore } from 'pinia'
import emails from '@data/emails.json'
import { EmailsFolderEnum } from '@/types/emails'
export const useEmailStore = defineStore('email', () => {
  const allEmailsSelected = reactive(
    [{
      type: 1,
      value: false
    },
    {
      type: 2,
      value: false
    }],
  )
  const emailOpened = ref({})
  const isModalVisible = ref(false)
  const emailsList = ref(emails)
  const inboxEmail = computed(() => emailsList.value.filter((email: { folder: number }) => email.folder === EmailsFolderEnum.inbox))
  const archiveEmail = computed(() => emailsList.value.filter((email: { folder: number }) => email.folder === EmailsFolderEnum.archive))
  const getEmailsByFolder = computed(() => (folder: number) => emailsList.value.filter((email: { folder: number }) => email.folder === folder))
  const checkEmail = (id: number) => {
    const email = emailsList.value.find((email: { id: number }) => email.id === id)
    if (email) {
      email.checked = !email.checked
    }
  }
  const removeCheckEmail = (id: number) => {
    const email = emailsList.value.find((email: { id: number }) => email.id === id)
    if (email) {
      email.checked = false
    }
  }
  const checkAllEmails = (checked: boolean) => {
    emailsList.value.forEach((email: { checked: boolean }) => {
      email.checked = checked
    })
  }
  const archiveEmails = () => {
    emailsList.value.forEach((email: { checked: boolean; folder: number }) => {
      if (email.checked) {
        email.folder = EmailsFolderEnum.archive
      }
      email.checked = false
    })
  }
  const archiveEmailsById = (id: number) => {
    const email = emailsList.value.find((email: { id: number }) => email.id === id)
    if (email) {
      email.folder = EmailsFolderEnum.archive
    }
  }
  const returnToInbox = () => {
    emailsList.value.forEach((email: { checked: boolean; folder: number }) => {
      if (email.checked) {
        email.folder = EmailsFolderEnum.inbox
      }
      email.checked = false
    })
  }
  const returnToInboxById = (id: number) => {
    const email = emailsList.value.find((email: { id: number }) => email.id === id)
    if (email) {
      email.folder = EmailsFolderEnum.inbox
    }
    isModalVisible.value = false
  }
  const markAsRead = () => {
    emailsList.value.forEach((email: { checked: boolean; read: boolean }) => {
      if (email.checked) {
        email.read = true
      }
      email.checked = false
    })
  }
  const markAsReadById = (id: number) => {
    const email = emailsList.value.find((email: { id: number }) => email.id === id)
    if (email) {
      email.read = true
    }
    isModalVisible.value = false
  }
  const getEmailsCheckedByFolder = (folder: number) => {
    return emailsList.value.filter((email: { folder: number; checked: boolean }) => email.folder === folder && email.checked)
  }
  const openEmail = (email:Object) => {
    emailOpened.value = email;
    isModalVisible.value = true
  }
  const closeEmail = () => {
    isModalVisible.value = false
  }
  watch(inboxEmail, (emails) => {
    if(emails.length === 0){
      allEmailsSelected[0].value = false
    }
    else{
      allEmailsSelected[0].value = emails.every((email: { checked: boolean }) => email.checked)
    }
  } , {deep:true})
 watch(archiveEmail, (emails) => {
    allEmailsSelected[1].value = emails.every((email: { checked: boolean }) => email.checked)
  } , {deep:true})
  
  return {
     emailsList , inboxEmail,closeEmail,emailOpened, isModalVisible, archiveEmail,getEmailsByFolder , allEmailsSelected ,
    checkEmail,checkAllEmails,archiveEmails ,markAsRead ,removeCheckEmail ,getEmailsCheckedByFolder,returnToInbox ,openEmail,markAsReadById
    ,archiveEmailsById,returnToInboxById }
})
