import React from "react";

const ContactPage = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Liên Hệ</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800">Thông tin liên hệ</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
                                <span className="text-lg text-gray-700">0981624798</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                                <span className="text-lg text-gray-700">SE347-nhom11@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                                <span className="text-lg text-gray-700">
                                    Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh, Vietnam
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Vị trí của chúng tôi</h2>
                        <div className="relative">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.795135427699!2d106.80047917451817!3d10.870014157461519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e1!3m2!1sen!2s!4v1735810192342!5m2!1sen!2s"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
