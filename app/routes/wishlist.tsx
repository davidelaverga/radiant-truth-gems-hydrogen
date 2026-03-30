import {Link} from 'react-router';
import type {Route} from './+types/wishlist';
import {Heart} from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Wishlist | Astreas'},
    {
      name: 'description',
      content: 'Your saved jewelry pieces at Astreas.',
    },
  ];
}

export default function Wishlist() {
  // TODO: Implement wishlist with localStorage persistence
  // For now, show a placeholder that directs users to browse
  return (
    <div className="min-h-screen">
      <section className="container-narrow py-24 md:py-32 text-center">
        <Heart className="w-10 h-10 text-accent mx-auto mb-6" />
        <h1 className="serif-heading text-4xl md:text-5xl mb-4">Your Wishlist</h1>
        <p className="body-refined max-w-md mx-auto mb-10">
          Save your favorite pieces to revisit later. Browse our collection to
          start adding items to your wishlist.
        </p>
        <Link to="/collections" prefetch="intent" className="btn-dawn inline-block">
          Browse Collection
        </Link>
      </section>
    </div>
  );
}
