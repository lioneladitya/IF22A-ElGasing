'use client';

import React from 'react';
import Link from 'next/link';

const Testimonials = () => {
  return (
    <section>
      <h2>What Our Customers Say</h2>
      <div>
        <Link href="/testimonial-details">
          View Testimonial Details
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
