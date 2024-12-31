import { Fragment } from 'react';
import { Dialog, DialogTitle, Transition, TransitionChild, DialogPanel } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

export default function EditTaskModal() {

    const navigate = useNavigate()

    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, {replace: true}) }>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                <DialogTitle
                                    as="h3"
                                    className="font-black text-4xl  my-5"
                                >
                                    Edit task
                                </DialogTitle>

                                <p className="text-xl font-bold">Make task changes in {''}
                                    <span className="text-fuchsia-600">this form</span>
                                </p>

                                <form
                                    className="mt-10 space-y-3"
                                    noValidate
                                >
                    

                    
                                    <input
                                        type="submit"
                                        className=" bg-gray-800 hover:bg-gray-900 w-full p-3  text-white font-black  text-xl cursor-pointer"
                                        value='Save task'
                                    />
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}