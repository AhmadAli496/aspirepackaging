import React from 'react'
import { Mail, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
const Contact = () => {
    return (
        <section id="contact" className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact Us</h2>
                    <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
                    <p className="mt-6 text-lg text-slate-600">
                        Have questions or ready to discuss your packaging needs? Get in touch with our team.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    <div>
                        <form className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="mt-1 p-2 bg-white block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="mt-1 p-2 bg-white block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 p-2 bg-white block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="mt-1 p-2 bg-white block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 p-2  bg-white block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-emerald-600 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-slate-600">123 Packaging Street, Suite 100</p>
                                        <p className="text-slate-600">New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-emerald-600 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-slate-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-emerald-600 mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-slate-600">info@packagingcompany.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Saturday:</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden h-[250px] relative">
                            <Image
                                src="/placeholder.svg?height=500&width=800"
                                alt="Office location map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact